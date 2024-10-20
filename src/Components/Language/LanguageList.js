import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './LanguageList.css';

const LanguageList = () => {
    const languages = [
        { language: 'Arabic', level: 'Fluent', color: '#132743' },
        { language: 'English', level: 'Intermediate', color: '#407088' },
        { language: 'French', level: 'Basic', color: '#ffb5b5' },
    ];

    const levelToPercentage = (level) => {
        switch (level) {
            case 'Fluent':
                return 100;
            case 'Intermediate':
                return 70;
            case 'Basic':
                return 50;
            default:
                return 0;
        }
    };

    const LanguageLevel = ({ language, level, color }) => {
        const percentage = levelToPercentage(level);

        return (
            <div className="language-level">
                <span className="language">{language}</span>
                <div className="progress-circle">
                    <CircularProgressbar 
                        value={percentage} 
                        text={`${percentage}%`} 
                        styles={buildStyles({
                            pathColor: color, 
                            textColor: '#000', 
                        })}
                        strokeWidth={10} 
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="language-list-container">
            <h2 className="title">Languages</h2>
            <div className="language-list">
                {languages.map((lang, index) => (
                    <LanguageLevel 
                        key={index} 
                        language={lang.language} 
                        level={lang.level} 
                        color={lang.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default LanguageList;
