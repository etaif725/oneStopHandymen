import {
  Search,
  Hammer,
  ClipboardCheck,
  Users,
  Building2,
  Store,
  MapPin,
  MessageSquare,
  Camera,
  Layers,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Hammer,
  ClipboardCheck,
  Users,
  Building2,
  Store,
  MapPin,
  MessageSquare,
  Camera,
  Layers,
  TrendingUp,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Building2;
}
