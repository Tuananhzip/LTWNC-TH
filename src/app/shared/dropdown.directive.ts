import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    isOpen=false;
    constructor(private element: ElementRef, private renderer: Renderer2){}
    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
        let part=this.element.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen){ this.renderer.addClass(part,'show')}
        else { this.renderer.removeClass(part,'show')}
    }
}