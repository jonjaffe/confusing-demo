import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button, Badge } from "@/components/tuxedo";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isOnSale?: boolean;
  isFavorite?: boolean;
  className?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  category,
  isOnSale = false,
  isFavorite = false,
  className,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-brand-car-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200",
        className,
      )}
    >
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative">
        <div className="aspect-square overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="small" className="font-semibold">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isOnSale && (
            <Badge variant="primary" size="small">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="small"
          className={cn(
            "absolute top-3 right-3 h-8 w-8 rounded-full backdrop-blur-sm transition-all duration-200 p-0",
            isFavorite
              ? "bg-brand-magenta/90 text-white hover:bg-brand-magenta"
              : "bg-white/20 text-white hover:bg-white/30",
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs font-medium text-brand-car-blue uppercase tracking-wide">
          {category}
        </div>

        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-brand-primary-dark line-clamp-2 hover:text-brand-car-blue transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(rating)
                    ? "fill-brand-finance-orange text-brand-finance-orange"
                    : "text-gray-300",
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-brand-primary-dark">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          variant="outline"
          size="medium"
          fullWidth
          className="hover:bg-brand-car-blue hover:text-white hover:border-brand-car-blue font-semibold transition-all duration-200"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
