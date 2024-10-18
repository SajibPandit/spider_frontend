import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RenderStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon
          key={`full-${index}`}
          sx={{ color: "#ffc107", fontSize: "1rem" }}
        />
      ))}
      {hasHalfStar && (
        <StarHalfIcon sx={{ color: "#ffc107", fontSize: "1rem" }} />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarBorderIcon
          key={`empty-${index}`}
          sx={{ color: "#ffc107", fontSize: "1rem" }}
        />
      ))}
    </>
  );
};

export default RenderStars;
