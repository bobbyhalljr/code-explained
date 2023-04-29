import { useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const Alert = () => {
    return (
        <div className="alert alert-info shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>You Signed Out! We are going to miss you! 😕</span>
            </div>
        </div>
    )
}

export const useSupabaseSignOut = () => {
    const supabase = useSupabaseClient();
    useEffect(() => { 
        const signOut = async () => { 
            try { 
                await supabase.auth.signOut(); 
            } catch (error) { 
                console.error('Error signing out: ', error); 
            } 
        }; 

        signOut(); 
        <Alert />
    }, []);
};