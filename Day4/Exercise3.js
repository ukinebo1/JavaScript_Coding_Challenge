// Level 3

// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```

// 1. Write a program which tells the number of days in a month, now consider leap year.

let user = prompt("Enter a month")
let month =user.toLowerCase()

switch (month) {
    case "january":
        alert(`${month} has 31 days.`)
        break;
        case "february":
        alert(`${month} has 28 days.`)
        break;
        case "march":
        alert(`${month} has 31 days.`)
        break;
        case "april":
        alert(`${month} has 30 days.`)
        break;
        case "may":
        alert(`${month} has 31 days.`)
        break;
        case "june":
        alert(`${month} has 30 days.`)
        break;
        case "july":
        alert(`${month} has 31 days.`)
        break;
        case "august":
        alert(`${month} has 31 days.`)
        // return (`${month} has 31 days.`)
        break;
        case "september":
        alert(`${month} has 30 days.`)
        break;
        case "october":
        alert(`${month} has 31 days.`)
        break;
        case "november":
        alert(`${month} has 31 days.`)
        break;
        case "december":
        alert(`${month} has 31 days.`)
        break;

    default:
        alert(`Invalid month`)
        break;
}