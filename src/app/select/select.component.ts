import { Component, HostListener, OnInit } from '@angular/core';

type ICar = {
    id: number
    title: string
}

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    isOptions = false;
    currentValue = 'Select car'

    cars: ICar[] = [
        {id: 1, title: 'Tesla'},
        {id: 2, title: 'Mercedes'},
        {id: 3, title: 'Porsche'},
        {id: 4, title: 'Ferrari'},
        {id: 5, title: 'Aston Martin'},
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.isOptions = false;
        }
    }

    toggleOptions() {
        this.isOptions = !this.isOptions
    }

    changeCurrentValue(id: number) {
        const selectedCar = this.cars.find((c) => {
            return c.id === id
        })
        if (selectedCar) {
            this.currentValue = selectedCar.title
        }
    }

}
