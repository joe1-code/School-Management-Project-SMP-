import path from 'path';

export default {
 // ... other webpack configurations ...
 resolve: {
  fallback: {
   "crypto": false
  }
 }
};
