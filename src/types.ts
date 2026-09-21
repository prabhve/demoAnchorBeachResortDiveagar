export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'semi-deluxe' | 'super-deluxe';
  price: number;
  originalPrice?: number;
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  description: string;
  images: string[];
  features: string[];
  amenities: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface DiningItem {
  name: string;
  category: 'seafood' | 'konkani-veg' | 'breakfast' | 'special';
  description: string;
  isVeg: boolean;
  price?: string;
  isChefSpecial?: boolean;
  image: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: 'water-sports' | 'beach' | 'resort';
  description: string;
  timing?: string;
  pricingNote?: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  stayDate: string;
  rating: number;
  roomType: string;
  comment: string;
  avatar: string;
}

export interface BookingState {
  checkInDate: string;
  checkOutDate: string;
  roomId: string;
  adults: number;
  children: number;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  specialRequests: string;
}
