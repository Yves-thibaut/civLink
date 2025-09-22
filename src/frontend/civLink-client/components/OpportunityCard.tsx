'use client';

import { Calendar, MapPin, DollarSign, Building, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Opportunity } from '@/lib/data';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const typeColors: Record<string, string> = {
    financing: 'bg-green-100 text-green-800',
    training: 'bg-blue-100 text-blue-800',
    event: 'bg-purple-100 text-purple-800',
    partnership: 'bg-orange-100 text-orange-800'
  };

  const typeLabels: Record<string, string> = {
    financing: 'Financement',
    training: 'Formation',
    event: 'Événement',
    partnership: 'Partenariat'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 transform hover:-translate-y-1 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge className={typeColors[opportunity.type]}>
            {typeLabels[opportunity.type]}
          </Badge>
          {opportunity.amount && (
            <div className="flex items-center text-green-600 font-semibold">
              <DollarSign className="h-4 w-4 mr-1" />
              {opportunity.amount}
            </div>
          )}
        </div>
        <h3 className="font-bold text-lg text-gray-900 hover:text-orange-600 transition-colors">
          {opportunity.title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-gray-600">
          <Building className="h-4 w-4 mr-2 text-gray-400" />
          {opportunity.organization}
        </div>
        
        <p className="text-gray-600 line-clamp-3">
          {opportunity.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            Échéance : {formatDate(opportunity.deadline)}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            {opportunity.location}
          </div>
        </div>
        
        {/* Progress bar for deadline */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${Math.max(0, Math.min(100, (new Date(opportunity.deadline).getTime() - new Date().getTime()) / (30 * 24 * 60 * 60 * 1000) * 100))}%` 
            }}
          />
        </div>
        
        <div className="pt-3 border-t flex space-x-3">
          <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
            Postuler
          </Button>
          <Button variant="outline" className="flex-1">
            En savoir plus
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}