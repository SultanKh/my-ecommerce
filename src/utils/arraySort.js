import { useEffect } from "react";

const arraySort = (array) => {
    
    // Function to compare dates in descending order
    function compareDueDateDesc(a, b) {
        return new Date(b.dueDate) - new Date(a.dueDate);
      }
      
      // Function to compare amounts in ascending order
      function compareAmountAsc(a, b) {
        return a.amount - b.amount;
      }
      
      // Function to compare names in ascending order
      function compareNameAsc(a, b) {
        return a.name.localeCompare(b.name);
      }
      
      const sortedArray = array.sort(function(a, b) {
        // Sort by dueDate in descending order
        let result = compareDueDateDesc(a, b);
        if (result !== 0) return result;
      
        // If dueDate is equal, sort by amount in ascending order
        result = compareAmountAsc(a, b);
        if (result !== 0) return result;
      
        // If amount is also equal, sort by name in ascending order
        return compareNameAsc(a, b);
      });
    return sortedArray 
}

export default arraySort;