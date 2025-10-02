import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoTutorial } from '../../models/video-tutorial.model';

@Component({
  selector: 'app-video-card',
  standalone: true,
  template: `
    @if (video(); as v) {
      <article class="video-card">
        <h3>{{ v.title }}</h3>
        <p>{{ v.description }}</p>
        <div class="video-container">
          <iframe
            [src]="safeYoutubeUrl()"
            title="YouTube video player for {{ v.title }}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    }
  `,
  styles: `
    .video-card {
      background: var(--white);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 1.5rem;
      overflow: hidden;
    }

    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
      margin-top: 1rem;
      border-radius: var(--border-radius);
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  public video = input.required<VideoTutorial>();
  #sanitizer = inject(DomSanitizer);
  public safeYoutubeUrl = computed(() => {
    const videoId = this.video().youtubeId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
