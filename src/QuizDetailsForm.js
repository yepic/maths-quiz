import { useState } from 'react';

export default function QuizDetailsForm({ props }) {
    return (
        <form>
            <h1>Quiz details</h1>
            <input type="number" name="numberOfQuestions"></input>
            <input type="number" name="minBound"></input>
            <input type="number" name="maxBound"></input>
        </form>
    );
}
