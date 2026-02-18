import { initCaptcha } from "@/js/captcha.js";
import { checkFormFields, constructorForm } from "@/js/global-func.js";
import { api_postEmail } from "@/js/apibase.js";

// Типы для API ответа
interface ApiResponse {
    ok: boolean;
    [key: string]: unknown;
}

// Типы для параметров отправки
interface SendBidParams {
    type: number;
    text: string;
}

interface BidFormData {
    name: string;
    phone: string;
    city: string;
    brand: string;
    model: string;
}

// Функция для отправки сообщения (предполагается, что определена в глобальной области)
declare function sendMessage(message: string, type?: string): void;

// Инициализация форм при загрузке страницы
document.addEventListener('DOMContentLoaded', (): void => {
    const stateForrm1 = document.querySelector('.formBlock.v1');
    const stateForrm2 = document.querySelector('.formBlock.v2');

    if (stateForrm1) {
        stateForrm1.innerHTML = constructorForm(
            'st1',
            ['name*', 'phone*', 'city*', 'brand', 'model'],
            'sendBid',
            'Отправить заявку',
            'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
        ) as string;
    }

    if (stateForrm2) {
        stateForrm2.innerHTML = constructorForm(
            'st2',
            ['name*', 'phone*', 'city*', 'brand', 'model'],
            'sendBid',
            'Отправить заявку',
            'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
        ) as string;
    }

    initCaptcha();
});

/**
 * Отправляет заявку на диагностику АКПП
 * @param fName - имя класса формы
 * @returns false если валидация не пройдена, true если отправка инициирована
 */
export function sendBid(fName: string): boolean {
    // Получаем элементы формы
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`);
    const nameInput = document.querySelector(`.${fName} [name="name"]`) as HTMLInputElement | null;
    const phoneInput = document.querySelector(`.${fName} [name="phone"]`) as HTMLInputElement | null;
    const cityInput = document.querySelector(`.${fName} [name="city"]`) as HTMLInputElement | null;
    const brandInput = document.querySelector(`.${fName} [name="brand"]`) as HTMLInputElement | null;
    const modelInput = document.querySelector(`.${fName} [name="model"]`) as HTMLInputElement | null;
    const checkboxInput = document.querySelector(`.${fName} [type="checkbox"]`) as HTMLInputElement | null;

    // Валидация полей
    if (checkFormFields([capcthadiv, nameInput, cityInput, phoneInput, checkboxInput])) {
        return false;
    }

    // Подготовка данных формы
    const bidData: BidFormData = {
        name: nameInput?.value ?? '',
        phone: phoneInput?.value ?? '',
        city: cityInput?.value ?? '',
        brand: brandInput?.value ?? '',
        model: modelInput?.value ?? ''
    };

    // Подготовка параметров запроса
    const params: SendBidParams = {
        type: 12,
        text: JSON.stringify(bidData)
    };

    console.log('params', params);

    // Отправка данных на сервер
    api_postEmail(params)
        .then((res: ApiResponse) => {
            if (res && res.ok) {
                sendMessage('Заявка оптарвлена');
            } else {
                sendMessage('Сервер не принял', 'error');
            }
        })
        .catch((error: Error) => {
            console.error('Ошибка при отправке заявки:', error);
            sendMessage('Ошибка при отправке заявки', 'error');
        });

    return true;
}

// Для совместимости с HTML, добавляем функцию на глобальный объект window
declare global {
    interface Window {
        sendBid(fName: string): boolean;
    }
}

window.sendBid = sendBid;
