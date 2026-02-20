import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'newPage',
  imports: [],
  templateUrl: './newPage.html',
})
export class NewPageComponent {
  protected readonly list = signal([
    {
        title: 'item 1',
        value: 20,
        checked: false,
        key: 1,
    },
    {
        title: 'item 2',
        value: 30,
        checked: false,
        key: 2,
    },
    {
        title: 'item 3',
        value: 40,
        checked: false,
        key: 3,
    },
    {
        title: 'item 4',
        value: 40,
        checked: false,
        key: 4,
    }
  ]);

  onChecked(key: number) {
    this.list.update((list) => 
        list.map((item) => ({
            ...item,
            ...(item.key === key ? { checked: !item.checked, } : {}),
        }))
    );
  }

  checkedItems = computed(() => this.list().filter(({ checked }) => checked));
  sumCheckedItems = computed(() => this.checkedItems().reduce((acc, { value }) => acc += value, 0));
}
