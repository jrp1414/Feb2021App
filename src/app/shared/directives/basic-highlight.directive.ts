import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    ngOnInit(): void {
        // this.el.nativeElement.style.backgroundColor = "yellow";
        this.el.nativeElement.style["background-color"] = "yellow";
    }

}


//Life cycle hook Methods
//ngOnChanges
//ngOnInit
//ngAfterViewInit
//