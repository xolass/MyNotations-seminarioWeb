import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NewNoteRoutingModule } from "./newNote-routing.module";
import { NewNoteComponent } from "./newNote.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NewNoteRoutingModule
    ],
    declarations: [
        NewNoteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewNoteModule { }
