import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EditNoteRoutingModule } from "./editNote-routing.module";
import { EditNoteComponent } from "./editNote.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditNoteRoutingModule
    ],
    declarations: [
        EditNoteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditNoteModule { }
