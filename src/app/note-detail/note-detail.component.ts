import { Component, inject } from '@angular/core';
import { NOTES } from '../../notes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  deleteNote() {
    this.router.navigateByUrl('');
    if(this.note) {
      let delNote = NOTES.indexOf(this.note, 0);
      NOTES.splice(delNote, 1);
    }
  }
}
