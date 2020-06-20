import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ReadNoteRoutingModule } from "./readNote-routing.module";
import { ReadNoteComponent } from "./readNote.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReadNoteRoutingModule
    ],
    declarations: [
        ReadNoteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReadNoteModule { }
