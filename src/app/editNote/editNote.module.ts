import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { EditNoteRoutingModule } from "./editNote-routing.module";
import { EditNoteComponent } from "./editNote.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
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
