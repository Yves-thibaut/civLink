'use client';

import { useState } from 'react';
import Layout from '@/src/frontend/components/Layout';
import OpportunityCard from '@/src/frontend/components/OpportunityCard';
import { Button } from '@/src/frontend/components/ui/button';
import { Input } from '@/src/frontend/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/frontend/components/ui/tabs';
import { Badge } from '@/src/frontend/components/ui/badge';
import { Search, Filter, DollarSign, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { opportunities } from '@/src/frontend/lib/data';

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filterOpportunities = (type?: string) => {
    return opportunities.filter((opp) => {
      const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = !type || type === 'all' || opp.type === type;
      
      return matchesSearch && matchesType;
    });
  };

  const allOpportunities = filterOpportunities('all');
  const financingOpportunities = filterOpportunities('financing');
  const trainingOpportunities = filterOpportunities('training');
  const eventOpportunities = filterOpportunities('event');
  const partnershipOpportunities = filterOpportunities('partnership');

  const stats = [
    {
      label: 'Total Opportunités',
      value: opportunities.length,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      label: 'Financements',
      value: opportunities.filter(o => o.type === 'financing').length,
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      label: 'Formations',
      value: opportunities.filter(o => o.type === 'training').length,
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      label: 'Événements',
      value: opportunities.filter(o => o.type === 'event').length,
      icon: MapPin,
      color: 'text-orange-600'
    }
  ];

  const totalFunding = opportunities
    .filter(o => o.amount)
    .reduce((sum, o) => sum + parseInt(o.amount!.replace(/[^\d]/g, '')), 0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Opportunités</h1>
          <p className="text-gray-600 mb-6">
            Découvrez des financements, formations et événements pour développer votre OSC
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Total Funding Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Montant total disponible</h3>
                <p className="text-2xl font-bold">{totalFunding.toLocaleString()}€+</p>
              </div>
              <DollarSign className="h-12 w-12 text-white opacity-80" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher des opportunités..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-white border">
            <TabsTrigger value="all" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600">
              Toutes ({allOpportunities.length})
            </TabsTrigger>
            <TabsTrigger value="financing" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
              Financements ({financingOpportunities.length})
            </TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
              Formations ({trainingOpportunities.length})
            </TabsTrigger>
            <TabsTrigger value="event" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600">
              Événements ({eventOpportunities.length})
            </TabsTrigger>
            <TabsTrigger value="partnership" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600">
              Partenariats ({partnershipOpportunities.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="financing" className="mt-6">
            <div className="mb-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-1">💰 Opportunités de Financement</h3>
              <p className="text-green-700 text-sm">
                {financingOpportunities.length} opportunités de financement disponibles pour développer vos projets
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financingOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training" className="mt-6">
            <div className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-1">📚 Formations et Renforcement des Capacités</h3>
              <p className="text-blue-700 text-sm">
                {trainingOpportunities.length} formations pour développer les compétences de votre équipe
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="event" className="mt-6">
            <div className="mb-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 mb-1">🎉 Événements et Conférences</h3>
              <p className="text-purple-700 text-sm">
                {eventOpportunities.length} événements pour élargir votre réseau et partager vos expériences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partnership" className="mt-6">
            <div className="mb-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-800 mb-1">🤝 Opportunités de Partenariat</h3>
              <p className="text-orange-700 text-sm">
                {partnershipOpportunities.length} opportunités pour créer des collaborations stratégiques
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {allOpportunities.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune opportunité trouvée</h3>
            <p className="text-gray-600 mb-4">
              Essayez d'ajuster votre recherche ou de changer de catégorie.
            </p>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Effacer la recherche
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Vous avez une opportunité à partager ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Publiez vos appels à projets, formations ou événements pour atteindre plus de 1200 OSC à travers l'Afrique.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">
            Publier une opportunité
          </Button>
        </div>
      </div>
    </Layout>
  );
}