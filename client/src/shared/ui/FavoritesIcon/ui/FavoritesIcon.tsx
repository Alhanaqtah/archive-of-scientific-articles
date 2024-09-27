import InactiveFavoritesIcon from "@/shared/assets/Favorite-inactive.svg";
import ActiveFavoritesIcon from "@/shared/assets/Favorite-active.svg";

interface FavoritesIconProps {
  isActive: boolean;
}

export function FavoritesIcon({ isActive }: FavoritesIconProps) {
  return (
    <img
      src={isActive ? ActiveFavoritesIcon : InactiveFavoritesIcon}
      alt="favorites icon"
    />
  );
}
