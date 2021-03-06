import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompletedChallenges() {

    const { challengeCompleted } = useContext(ChallengesContext);

    return(
        <div className={ styles.completedChallengesContainer}>
            <span>Complete challenges</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}