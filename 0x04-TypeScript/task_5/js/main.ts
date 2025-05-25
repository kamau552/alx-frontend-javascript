// task_5/js/main.ts

// Define MajorCredits interface with a brand
interface MajorCredits {
  credits: number;
  brand: "major";
}

// Define MinorCredits interface with a different brand
interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
