import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { editNote, deleteNote } from "~/app/helpers/LocalStorage";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Note } from "~/classes/note";


@Component({
    selector: "ReadNote",
    templateUrl: "./readNote.component.html",
    styleUrls: ['./readNotes.component.css']

})
export class ReadNoteComponent implements OnInit {
    note: Note;
    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.note = JSON.parse(params.note);
        })
    }
    toggleFavorite = () => {
        this.note._isFavorite = !this.note._isFavorite;
        console.log(this.note);
        editNote(this.note._id, this.note);
    }

    editNote = () => {
        this.routerExtensions.navigate(['editNote'], {
            queryParams: {
                note: JSON.stringify(this.note)
            }
        })
    }

    deleteNote = async () => {
        if (await dialogs.confirm('Deseja excluir essa nota?')) {
            console.log('excluidno nota')
            deleteNote(this.note._id);
            this.routerExtensions.navigate(['myNotes'])
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
