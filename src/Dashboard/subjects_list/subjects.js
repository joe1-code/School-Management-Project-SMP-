// import React from "react";
// import { Card } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import Link from "@mui/material/Link";
// import { Paper} from '@mui/material';
// import makeStyles from "@mui/styles";

// function Subjects(){


//  const subjData = [
//     {
//         "subject":"Physics"
//     },
//     {
//         "subject":"Maths"
//     },
//     {
//         "subject":"Chemistry"
//     },
//     {
//         "subject":"Biology"
//     },
//     {
//         "subject":"Geography"
//     }
//  ]


//  const useStyles = makeStyles((theme) => ({
//     paper: {
//       padding: theme.spacing(2),
//       background: '#fff',
//       backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 5px, #ccc 5px, #ccc 10px)',
//     },
//   }));

//   const classes = useStyles();


//     return(
        
//         <div>
//            <h3>The list of subjects</h3>
//         <Paper className={classes.paper}>
        
//             <div>
//               {
//                 subjData.map((paper)=>(
//                  <span>{paper.subject}</span>
//                 ))
//               }
//             </div>
//         </Paper>
            
//         </div>
        
//     )
// }

// export default Subjects;