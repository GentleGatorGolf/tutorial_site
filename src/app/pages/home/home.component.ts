import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { BlurPasswordComponent } from '../../components/blur-password/blur-password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoCardComponent, BlurPasswordComponent, CommonModule],
  template: `
    <app-blur-password *ngIf="!unlocked" (unlockedEvent)="unlocked = true"></app-blur-password>
    <div [class.blurred]="!unlocked">
      <section class="hero">
        <h1>Welcome to Gentle Gator Golf</h1>
        <p>Your journey to a better golf game starts here. Browse our video tutorials below. <br> Presented by Gentle Gator Golf & Chris Spalla, Golf Digest's Best Young Teachers in America</p>
      </section>

      <section class="video-grid">
        @for (video of videos(); track video.youtubeId) {
          <app-video-card [video]="video" />
        } @empty {
          <p>No video tutorials available at the moment. Please check back later!</p>
        }
      </section>
    </div>
  `,
  styles: `
    .hero {
      text-align: center;
      padding: 2rem 1rem;
      background-color: var(--white);
      border-radius: var(--border-radius);
      margin-bottom: 2rem;
    }

    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .blurred {
      filter: blur(10px);
      pointer-events: none;
      user-select: none;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  #videoService = inject(VideoService);
  protected readonly videos = this.#videoService.videos;
  protected unlocked = false;
}
