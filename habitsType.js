class Habit{
    constructor(name, description){
        this.name= name;
        this.description = description;
        }
    
}

class StudyHabit extends Habit{
    constructor(name, description){
super(name, description)
this.type= "Study";
        }
       }
    
       class HealthHabit extends Habit{
        constructor(name, description){
    super(name, description)
    this.type= "Health";
            }
           }

class HabitFactory{
   static createHabit(type, name, description){
        switch(type){
            case 'Study':
                return new StudyHabit(name, description);
            case 'Health':
                return new HealthHabit(name, description);
            default:
                throw new Error('Unknown habit type');
        }
    }
}

module.exports = HabitFactory;







