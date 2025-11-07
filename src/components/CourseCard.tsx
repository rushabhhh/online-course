import { Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  category: string;
  duration?: string;
  students?: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  category,
  duration,
  students,
}: CourseCardProps) => {
  return (
    <Link to={`/course/${id}`}>
      <Card className="group overflow-hidden border border-border bg-card transition-smooth hover:card-shadow-hover cursor-pointer h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {category}
          </Badge>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm">{rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
          
          {(duration || students) && (
            <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
              {duration && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{duration}</span>
                </div>
              )}
              {students && (
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{students.toLocaleString()}</span>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-auto flex items-center gap-2">
            <span className="text-xl font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
