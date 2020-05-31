import { newEntityId } from './EntityId.mock';
import { MusicThemeType } from '../schemas/music/MusicTheme';

const values = [
  'Adventure',
  'Affection/Fondness',
  'Affirmation',
  'Anger/Hostility',
  'Animals',
  'Anniversary',
  'Argument',
  'At the Beach',
  'At the Office',
  'Autumn',
  'Award Winners',
  'Awareness',
  'Background Music',
  'Biographical',
  'Birth',
  'Birthday',
  'Breakup',
  'Cars',
  'Celebration',
  'Celebrities',
  'Children',
  'Christmas',
  'Christmas Party',
  'City Life',
  'Classy Gatherings',
  'Club',
  'Comfort',
  'Conflict',
  'Cool & Cocky',
  'Country Life',
  'Crime',
  'D-I-V-O-R-C-E',
  'Dance Party',
  'Day Driving',
  'Daydreaming',
  'Death',
  'Despair',
  'Destiny',
  'Dinner Ambiance',
  'Disappointment',
  'Dreaming',
  'Drinking',
  'Drugs',
  'Early Morning',
  'Easter',
  'Empowering',
  'Everyday Life',
  'Exercise/Workout',
  'Family',
  'Family Gatherings',
  'Fantasy',
  'Fear',
  'Feeling Blue',
  'Flying',
  'Food/Eating',
  'Forgiveness',
  'Fourth of July',
  'Freedom',
  'Friendship',
  'Funeral',
  'Girls Night Out',
  'Good Times',
  'Goodbyes',
  'Graduation',
  'Guys Night Out',
  'Halloween',
  'Hanging Out',
  'Happiness',
  'Healing/Comfort',
  'Heartache',
  'Heartbreak',
  'High School',
  'Historical Events',
  'Holidays',
  'Home',
  'Homecoming',
  'Hope',
  'Housework',
  'Illness',
  'In Love',
  'Introspection',
  'Jealousy',
  'Joy',
  'Late Night',
  'Lifecycle',
  'Loneliness',
  'Long Walk',
  'Loss/Grief',
  'Lying',
  'Magic',
  'Maverick',
  'Meditation',
  'Memorial',
  'Military',
  'Mischievous',
  'Monday Morning',
  'Money',
  'Moon',
  'Morning',
  'Motivation',
  'Music',
  'Myths & Legends',
  'Nature',
  'New Love',
  'Night Driving',
  'Nighttime',
  'Open Road',
  'Other Times & Places',
  'Pain',
  'Parenthood',
  'Partying',
  'Passion',
  'Patriotism',
  'Peace',
  'Picnic',
  'Playful',
  'Poetry',
  'Politics/Society',
  'Pool Party',
  'Prom',
  'Promises',
  'Protest',
  'Rainy Day',
  'Reflection',
  'Regret',
  'Relationships',
  'Relaxation',
  'Religion',
  'Reminiscing',
  'Reunion',
  'Revolutionary',
  'Road Trip',
  'Romance',
  'Romantic Evening',
  'Scary Music',
  'School',
  'Science',
  'SciFi',
  'Seduction',
  'Separation',
  'Sex',
  'Slow Dance',
  'Small Gathering',
  'Solitude',
  'Sorrow',
  'Sports',
  'Spring',
  'Starry Sky',
  'Starting Out',
  'Stay in Bed',
  'Storms',
  'Street Life',
  'Summer',
  'Sun',
  'Sunday Afternoon',
  'Sweet Dreams',
  'Teenagers',
  'Temptation',
  'TGIF',
  'Thanksgiving',
  'The Creative Side',
  'The Great Outdoors',
  'Theme',
  'Tragedy',
  'Travel',
  'Truth',
  'Vacation',
  'Victory',
  'Violence',
  'Visions',
  'War',
  'Water',
  'Weather',
  'Wedding',
  'Winter',
  'Wisdom',
  'Word Play',
  'Work',
  'World View',
  'Yearning',
  'Youth',
  'Zeitgeist'
];

export const AllMusicThemes: MusicThemeType[] =
  values.map(value => ({ id: newEntityId(), value })) as unknown as MusicThemeType[] // A hack to fix TS compilation.

export const MusicTheme = AllMusicThemes[0];
