import { Link, styled, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Copyright() {

  return (
    <Typography mt="-2" variant="body2" align="center" sx={{ color: 'text.secondary'}}>
            &copy; Aman Karn  
        
            <Link variant="subtitle3" component={'a'} href="https://github.com/Aman-Karn45" target="_blank">
            [GitHub]
            </Link>
          </Typography>
  )
}
