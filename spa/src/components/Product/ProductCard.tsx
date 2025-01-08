import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../api/productApi';

interface ProductCardProps extends Product {
    id: number;
    title: string;
    price: number;
    description: string;
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
  }

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, description, onUpdate, onDelete }) => {

    return (
      <div>
        <CardContent>
            <Typography variant="h5" component="div">
                { title }
            </Typography>
            <Typography variant="body2">
                { description }
            </Typography>
            <Typography variant="body2">
                { price }
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => onUpdate(id)}>Update</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </CardActions>
      </div>
    );
  };
  
  export default ProductCard;
  