var solver = require("javascript-lp-solver"),
  results,
  model = {
    "optimize": "capacity",
    "opType": "max",
    "constraints": {
        "plane": {"max": 44},
        "person": {"max": 512},
        "cost": {"max": 300000}
    },
    "variables": {
        "brit": {
            "capacity": 20000,
            "plane": 1,
            "person": 8,
            "cost": 5000
        },
        "yank": {
            "capacity": 30000,
            "plane": 1,
            "person": 16,
            "cost": 9000
        }
    },
};
 
results = solver.Solve(model);
console.log(results);


// Using a tableu format
        model = [
                  "max: 1200 table 1600 dresser",
                  "30 table 20 dresser <= 300",
                  "5 table 10 dresser <= 110",
                  "30 table 50 dresser <= 400",
                  "int table",
                  "int dresser",
                ];
  
  // Reformat to JSON model              
  model = solver.ReformatLP(model);
  
  // Solve the model
results = solver.Solve(model);
console.log(results);


// multiobjective
 model = {
    "optimize": {
        "bacon": "max",
        "cheddar cheese": "max",
        "french fries": "max"
    },
    "constraints": {
        "carb": { "max": 375 },
        "protein": { "max": 225 },
        "fat": { "max": 66.666 }
    },
    "variables": {
         "egg white":{ "carb": 0.0073, "protein": 0.109, "fat": 0.0017, "egg white": 1 },
         "egg whole":{ "carb": 0.0072, "protein": 0.1256, "fat": 0.0951, "egg whole": 1 },
         "cheddar cheese":{ "carb": 0.0128, "protein": 0.249, "fat": 0.3314, "cheddar cheese": 1 },
         "bacon":{ "carb": 0.00667, "protein": 0.116, "fat": 0.4504, "bacon": 1 },
         "potato": { "carb": 0.1747, "protein": 0.0202, "fat": 0.0009, "potato": 1 },
         "french fries": { "carb": 0.3902, "protein": 0.038, "fat": 0.1612, "french fries": 1 }
    },
    "ints": {}
};
  // Solve the model
results = solver.MultiObjective(model);
console.log(results);