import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Client } from 'app/models/client';
import { Incident } from 'app/models/incident';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // Коллекция клиентов.
        let clients: Client[] = [
            {
                id: 1, 
                fullName: "Артемьева Ангелина Федосеевна", 
                passportId: 45083, 
                mail: "er1bf@moldtelecom.md", 
                phoneNumber: "2341352", 
                type: "Заемщик"
            },
            {
                id: 2, 
                fullName: "Пономарёв Протасий Германович", 
                passportId: 45119, 
                mail: "wil@blues.minsk.by", 
                phoneNumber: "243252", 
                type: "Заемщик"
            },
            {
                id: 3, 
                fullName: "Савельева Марина Протасьевна", 
                passportId: 47387, 
                mail: "ly1bzb@ly1xx.ampr.org", 
                phoneNumber: "42342", 
                type: "Вкладчик"
            },
            {
                id: 4, 
                fullName: "Григорьева Вера Макаровна", 
                passportId: 46817, 
                mail: "ly1bzb@uy0ll.ampr.org", 
                phoneNumber: "234324234", 
                type: "Вкладчик"
            },
            {
                id: 5, 
                fullName: "Муравьёва Оксана Руслановна", 
                passportId: 45061, 
                mail: "ly1bzb@ly3od.ampr.org", 
                phoneNumber: "4234234", 
                type: "Заемщик"
            },
            {
                id: 6, 
                fullName: "Гурьев Станислав Ильяович", 
                passportId: 45161, 
                mail: "ly1bzb@pub.osf.lt", 
                phoneNumber: "32423423", 
                type: "Заемщик"
            },
            {
                id: 7, 
                fullName: "Муравьёв Василий Семёнович", 
                passportId: 44909, 
                mail: "ly1ff@kb0tdf.ampr.org", 
                phoneNumber: "234234", 
                type: "Вкладчик"
            },
            {
                id: 8, 
                fullName: "Лапин Филат Никитевич", 
                passportId: 44279, 
                mail: "ly2blq@qsl.net", 
                phoneNumber: "2343243", 
                type: "Вкладчик"
            },
            {
                id: 9, 
                fullName: "Шилов Глеб Николаевич", 
                passportId: 48497, 
                mail: "ly2fe@qsl.net", 
                phoneNumber: "234234", 
                type: "Вкладчик"
            },
            {
                id: 10, 
                fullName: "Медведьев Владимир Владиславович", 
                passportId: 47221, 
                mail: "ly2oi@qsl.net", 
                phoneNumber: "234234", 
                type: "Вкладчик"
            },
            {
                id: 11, 
                fullName: "Быкова Элеонора Антоновна", 
                passportId: 45533, 
                mail: "ly2wn@ly2wn.ampr.org", 
                phoneNumber: "234234", 
                type: "Заемщик"
            },
            {
                id: 12, 
                fullName: "Жданов Валерьян Федотович", 
                passportId: 38281, 
                mail: "ly3ngy@ly3ngy.ampr.org", 
                phoneNumber: "234234", 
                type: "Возможный клиент"
            },
            {
                id: 13, 
                fullName: "Тихонов Серапион Ростиславович", 
                passportId: 37813, 
                mail: "ly3od@ly3od.ampr.org", 
                phoneNumber: "234234", 
                type: "Возможный клиент"
            },
            {
                id: 14, 
                fullName: "Дьячкова Маргарита Эдуардовна", 
                passportId: 38921, 
                mail: "ly3nmn@qsl.net", 
                phoneNumber: "234234", 
                type: "Возможный клиент"
            },
            {
                id: 15, 
                fullName: "Федотова Наина Антоновна", 
                passportId: 39323, 
                mail: "pasha@mail.baltics.ru", 
                phoneNumber: "2342342", 
                type: "Возможный клиент"
            },
            {
                id: 16, 
                fullName: "Уварова Евпраксия Олеговна", 
                passportId: 40787, 
                mail: "ua1aay@qsl.net", 
                phoneNumber: "23423423", 
                type: "Возможный клиент"
            },
            {
                id: 17, 
                fullName: "Ситников Ким Мэлсович", 
                passportId: 41183, 
                mail: "ravil@wplus.net", 
                phoneNumber: "23423423", 
                type: "Возможный клиент"
            },
            {
                id: 18, 
                fullName: "Терентьева София Романовна", 
                passportId: 41507, 
                mail:"rrgde@mail.wplus.net", 
                phoneNumber: "23423432", 
                type: "Возможный клиент"
            }
        ];
        
        // Коллекция инцидентов.
        let incidents: Incident[] = [
            {
                id: 1,
                clientId: 1,
                theme: "Жалоба",
                date: new Date("1997-05-05")
            },
            {
                id: 2,
                clientId: 2,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 3,
                clientId: 3,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 4,
                clientId: 4,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 5,
                clientId: 5,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 6,
                clientId: 6,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 7,
                clientId: 7,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 8,
                clientId: 8,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 9,
                clientId: 9,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 10,
                clientId: 10,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 11,
                clientId: 11,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 12,
                clientId: 12,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 13,
                clientId: 13,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 14,
                clientId: 14,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 15,
                clientId: 15,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 16,
                clientId: 16,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 17,
                clientId: 17,
                theme: "Жалоба",
                date: new Date(Date.now())
            },
            {
                id: 18,
                clientId: 18,
                theme: "Заявление",
                date: new Date(Date.now())
            },
            {
                id: 19,
                clientId: 18,
                theme: "Заявление",
                date: new Date(Date.now())
            }
        ];
        return { clients: clients, incidents: incidents };
    }
    
    constructor() {}
}