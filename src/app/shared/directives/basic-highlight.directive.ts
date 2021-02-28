import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor() {

    }
    ngOnInit(): void {
        
    }

}


//Life cycle hook Methods
//ngOnChanges
//ngOnInit
//ngAfterViewInit
//