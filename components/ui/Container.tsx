import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

/**
 * Global Container component to ensure consistent side margins (padding) 
 * across all sections, as requested by the user.
 * It prevents the need to add `px-6 lg:px-12` manually to every section content wrapper.
 */
export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}
