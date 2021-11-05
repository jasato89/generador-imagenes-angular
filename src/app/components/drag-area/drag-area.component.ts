import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-drag-area',
  templateUrl: './drag-area.component.html',
  styleUrls: ['./drag-area.component.css'],
})
export class DragAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('screen')
  screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  images = [
    'assets/svg/imagen1.png',
    'assets/svg/imagen2.png',
    'assets/svg/imagen3.png',
  ];

  placeholder = ['assets/svg/imagen1.png'];

  imgcreada = false;

  imagenCreada: any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  createImage() {
    console.log('I have been pressed');
    html2canvas(document.querySelector('#content-download')!).then(function (
      canvas
    ) {
      // Convert the canvas to blob
      canvas.toBlob(function (blob) {
        // To download directly on browser default 'downloads' location
        let link = document.createElement('a');
        link.download = 'image.png';
        link.href = URL.createObjectURL(blob);
        link.click();
      }, 'image/png');
    });
  }
}
