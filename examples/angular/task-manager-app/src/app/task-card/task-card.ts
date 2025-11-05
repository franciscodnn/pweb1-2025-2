import { Component, input, output } from '@angular/core';

@Component({
  selector: 'task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {
  title = input.required<string>();
  due = input<string>();
  level = input<string>();
  desc = input<string>();
  status = input<string>();

  cardClicked = output<string>();

  proximityColor(): string {
    const today: any = new Date()
    const due: any = new Date(this.due() as any)
    const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24))
    if (diff < 0) return 'bg-gray-500' // passed
    if (diff <= 1) return 'bg-red-500'
    if (diff <= 3) return 'bg-orange-400'
    if (diff <= 7) return 'bg-yellow-300'
    return 'bg-green-400'
  }

  handleClick() {
    console.log('Card clicked:', this.title());
    this.cardClicked.emit('Clicado!');
  }
}
