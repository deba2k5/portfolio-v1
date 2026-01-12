'use client';

import { publications } from '@/config/Research';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Badge } from '../ui/badge';

const statusColors = {
    'published': 'bg-green-500/20 text-green-400 border-green-500/30',
    'in-press': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'under-review': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const typeLabels = {
    'journal': 'Journal',
    'conference': 'Conference',
    'book-chapter': 'Book Chapter',
    'preprint': 'Preprint',
};

export default function Research() {
    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Research &" heading="Publications" />

            <div className="mt-8 space-y-6">
                {publications.map((pub, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-lg hover:shadow-primary/5"
                    >
                        {/* Type & Status Badges */}
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="text-xs font-medium text-muted-foreground">
                                {typeLabels[pub.type]}
                            </Badge>
                            <Badge
                                variant="outline"
                                className={`text-xs font-medium ${statusColors[pub.status]}`}
                            >
                                {pub.status === 'in-press' ? 'In Press' : pub.status === 'under-review' ? 'Under Review' : 'Published'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{pub.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                            {pub.link ? (
                                <a href={pub.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                    {pub.title}
                                </a>
                            ) : (
                                pub.title
                            )}
                        </h3>

                        {/* Authors */}
                        <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>

                        {/* Venue */}
                        <p className="mt-1 text-sm italic text-secondary">{pub.venue}</p>

                        {/* Abstract */}
                        <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed">
                            {pub.abstract}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    );
}
