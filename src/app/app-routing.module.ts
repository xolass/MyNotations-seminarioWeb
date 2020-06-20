import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/myNotes", pathMatch: "full" },
    { path: "myNotes", loadChildren: () => import("~/app/myNotes/myNotes.module").then((m) => m.MyNotesModule) },
    { path: "newNote", loadChildren: () => import("~/app/newNote/newNote.module").then((m) => m.NewNoteModule) },
    { path: "favorites", loadChildren: () => import("~/app/favorites/favorites.module").then((m) => m.FavoritesModule) },
    { path: "editNote", loadChildren: () => import("~/app/editNote/editNote.module").then((m) => m.EditNoteModule) },
    { path: "readNote", loadChildren: () => import("~/app/readNote/readNote.module").then((m) => m.ReadNoteModule) },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
