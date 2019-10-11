<p *ngIf="serverErrorDescription?.length > 0" class="alert text-center alert-danger">{{ serverErrorDescription }}</p>
export class UserRecoverComponent implements OnInit {
  //form interaction
  private serverErrorDescription: string;