import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MyNotesRoutingModule } from "./myNotes-routing.module";
import { MyNotesComponent } from "./myNotes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MyNotesRoutingModule
    ],
    declarations: [
        MyNotesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyNotesModule { }
