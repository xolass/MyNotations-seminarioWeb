import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { NewNoteRoutingModule } from "./newNote-routing.module";
import { NewNoteComponent } from "./newNote.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
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
