import { Injectable, signal } from '@angular/core';
import { VideoTutorial } from '../models/video-tutorial.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  #videos = signal<VideoTutorial[]>([
    {
      youtubeId: 'g6n9EaXv-p4',
      title: 'Driver: Pre Shot Routine',
      description: 'How to walk into a shot like a pro and not only aim your body but your mind',
    },
    {
      youtubeId: 'eH4jZ2Tj_a8',
      title: 'Driver: Ball Position (Front View)',
      description: 'Take the guesswork out of how far up in your stance the ball should be.',
    },
    {
      youtubeId: 'e2aA3QsmQn0',
      title: 'Driver: Ball Position (Side View)',
      description: 'Being incosistent with distance to the ball changes the club path. Learn how to find the middle ground and be consistent',
    },
    {
      youtubeId: 'e2aA3QsmQn0',
      title: 'Driver: Face Checkpoints',
      description: 'Practice the three critical face check points and get instant feedback',
    },
    {
      youtubeId: 'WkR4S_D56I0',
      title: 'Grip',
      description: 'Gripping the club correctly and consistently is your first step to a more consistent ball flight',
    },
        {
      youtubeId: 'WkR4S_D56I0',
      title: 'Iron: Side Hill Lies',
      description: 'Side Hill lies can be tricky. Learn how to adjust your stance and swing to make solid contact and control your ball flight.',
    },
        {
      youtubeId: 'WkR4S_D56I0',
      title: 'Iron: Up/Down Hill Lies',
      description: 'Up/Down hill lies can really mess up your scorecard. Here is how to attack them.',
    },
        {
      youtubeId: 'WkR4S_D56I0',
      title: 'Iron: Face Checkpoints',
      description: 'Practice the three critical face check points and get instant feedback',
    }
  ]);

  public readonly videos = this.#videos.asReadonly();
}
