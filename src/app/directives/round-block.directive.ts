import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

// Đây là 1 Directive
// Đây là 1 Custom Directive
// Là kiểu @Directive decorator
@Directive({
  selector: '[appRoundBlock]',
})
export class RoundBlockDirective implements OnInit {
  // khi sử dụng Typescript cần giá trị khởi tạo hay không? thêm vào dấu !
  @Input() appRoundBlock!: string; // de day la sai phai bo vao constructor

  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    let roundVal = `${this.appRoundBlock}`; // get giá trị từ @Input vào
    this.renderer.setStyle(
      this.elmRef.nativeElement, // the target Element
      'border-radius', // CSS property
      roundVal // CSS value of a propery
    );

    // cách này hơi dở vì mỗi lần lại setStyle cho có 1 CSS style thì quá dài dòng
    this.renderer.setStyle(
      this.elmRef.nativeElement,
      'background-color',
      'blue'
    );

    this.renderer.setStyle(this.elmRef.nativeElement, 'color', '#ffffff');
    // tham khảo thêm Class Render2 trong @angular/core
    // https://angular.io/api/core/Renderer2

    // let roundVal = `${this.appRoundBlock}`;
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'border-radius',
    //   roundVal
    // );
  }
}
