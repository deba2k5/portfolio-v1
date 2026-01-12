export interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: string;
    type: 'journal' | 'conference' | 'book-chapter' | 'preprint';
    status: 'published' | 'in-press' | 'under-review';
    abstract: string;
    link?: string;
    doi?: string;
}

export const publications: Publication[] = [
    {
        title: 'ResumeAnalyzer: AI-Powered ATS Optimization Framework for Enhanced Candidate Screening',
        authors: 'D. Chatterjee, S. Jana, et al.',
        venue: 'International Conference on AI Applications',
        year: '2025',
        type: 'conference',
        status: 'in-press',
        abstract:
            'A comprehensive AI framework leveraging transformer-based models and semantic analysis for automated resume parsing, skill extraction, and ATS compatibility scoring. The system achieves 94% accuracy in candidate-job matching.',
        link: '#',
    },
    {
        title: 'Unified Framework for Emotion Recognition and Behavioral Modeling in Human-Computer Interaction',
        authors: 'D. Chatterjee, S. Jana, et al.',
        venue: 'Advances in AI-Driven Systems (Book Chapter)',
        year: '2025',
        type: 'book-chapter',
        status: 'in-press',
        abstract:
            'This chapter presents a unified architecture combining facial expression analysis, voice sentiment detection, and physiological signals for comprehensive emotion recognition in interactive systems.',
        link: '#',
    },
    {
        title: 'Ethical Resilience in the Age of Data Poisoning: Defensive Strategies for Machine Learning Systems',
        authors: 'D. Chatterjee, S. Jana, et al.',
        venue: 'Ethics in AI and Data Science (Book Chapter)',
        year: '2025',
        type: 'book-chapter',
        status: 'in-press',
        abstract:
            'An exploration of adversarial attacks on ML systems, focusing on data poisoning techniques and defensive countermeasures. Proposes a multi-layer validation framework for training data integrity.',
        link: '#',
    },
];

const researchConfig = {
    publications,
};

export default researchConfig;
