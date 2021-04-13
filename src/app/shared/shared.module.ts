import { NgModule } from "@angular/core";
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight.directive";
import { MustMatchDirective } from "./directives/must-match.directive";
import { UnlessDirective } from "./directives/unless.directive";
import { FilterByCategoryPipe } from "./pipes/filter-by-category.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { ShortenPipe } from "./pipes/shorten.pipe";
import { SortPipe } from "./pipes/sort.pipe";

@NgModule({
    declarations: [
        ShortenPipe,
        FilterPipe,
        SortPipe,
        FilterByCategoryPipe,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        MustMatchDirective
    ],
    exports:[
        ShortenPipe,
        FilterPipe,
        SortPipe, 
        FilterByCategoryPipe,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        MustMatchDirective
    ]
})
export class SharedModule {

}