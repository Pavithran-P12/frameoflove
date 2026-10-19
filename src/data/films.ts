// Full-length films from the YouTube channel, shown in the two-row Films carousel
// in this order. To add one: copy an entry and paste the video ID from its
// YouTube link (youtube.com/watch?v=THIS_PART). The thumbnail loads from YouTube.
export interface Film {
  id: string;
  kind: string;
  duration: string;
  /** Short title shown on the tile. */
  title: string;
  /** One line under the title (hidden on phones). */
  subtitle: string;
  /** Full title, used for the video player and screen readers. */
  fullTitle: string;
}

export const films: Film[] = [
  {
    id: 'I6GEu6qZAm8',
    kind: 'Wedding film',
    duration: '19:53',
    title: 'Parikshith & Swetha',
    subtitle: 'A timeless Kerala wedding story',
    fullTitle: 'Traditional Wedding Video | Parikshith Nair & Swetha Murali | A Timeless Kerala Wedding Story',
  },
  {
    id: 'Ve4aX0PjBWw',
    kind: 'Wedding film',
    duration: '3:20',
    title: 'Maria & Nithin',
    subtitle: 'A beautiful Christian wedding',
    fullTitle: 'A Beautiful Christian Wedding Film | Maria & Nithin',
  },
  {
    id: 'V2kkL4djCgg',
    kind: 'Wedding film',
    duration: '4:41',
    title: 'Chris Kevin & Bhuvana',
    subtitle: 'As a father tells their story',
    fullTitle: 'As a Father Tells Their Story | Chris Kevin & Bhuvana | Christian Wedding Film',
  },
  {
    id: '1xYELw3LuqI',
    kind: 'Teaser',
    duration: '1:30',
    title: 'Uwais & Ayesha',
    subtitle: 'A father’s voice, a wedding tradition',
    fullTitle: 'A Father’s Voice, A Wedding Tradition | Uwais & Ayesha | Muslim Wedding Teaser',
  },
  {
    id: 'CkQ8uL1GQGM',
    kind: 'Save the date',
    duration: '1:09',
    title: 'Vignesh & Sowmya',
    subtitle: 'Two hearts, one beautiful beginning',
    fullTitle: 'M. Vignesh & Sowmya | Two Hearts… One Beautiful Beginning | Save The Date',
  },
  {
    id: 'tUbrwL9xNwM',
    kind: 'Family film',
    duration: '8:27',
    title: 'The Story of Gavan',
    subtitle: 'A mother’s love, his name and his birthday',
    fullTitle: 'The Story of Gavan | A Mother’s Love, His Name & His Birthday Story',
  },
];
