'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import OSCCard from '@/components/OSCCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List, MapPin } from 'lucide-react';
import { oscs, sectors, countries } from '@/lib/data';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('Tous les secteurs');
  const [selectedCountry, setSelectedCountry] = useState('Tous les pays');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter OSCs based on search criteria
  const filteredOSCs = oscs.filter((osc) => {
    const matchesSearch = osc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         osc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         osc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSector = selectedSector === 'Tous les secteurs' || osc.sector === selectedSector;
    const matchesCountry = selectedCountry === 'Tous les pays' || osc.country === selectedCountry;

    return matchesSearch && matchesSector && matchesCountry;
  });

  const totalMembers = oscs.reduce((sum, osc) => sum + osc.members, 0);
  const totalProjects = oscs.reduce((sum, osc) => sum + osc.projects, 0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Répertoire des OSC</h1>
          <p className="text-gray-600 mb-4">
            Découvrez et connectez-vous avec {oscs.length} organisations de la société civile à travers l'Afrique
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="outline" className="px-3 py-1">
              <MapPin className="h-4 w-4 mr-1" />
              {countries.length - 1} pays
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {totalMembers.toLocaleString()} membres au total
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {totalProjects} projets actifs
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {sectors.length - 1} secteurs
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher par nom, description ou domaine..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Sector Filter */}
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full lg:w-64">
                <SelectValue placeholder="Secteur d'activité" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Country Filter */}
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Pays" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Active Filters */}
          {(selectedSector !== 'Tous les secteurs' || selectedCountry !== 'Tous les pays' || searchTerm) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-gray-600">Filtres actifs:</span>
              {searchTerm && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                  Recherche: "{searchTerm}" ×
                </Badge>
              )}
              {selectedSector !== 'Tous les secteurs' && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedSector('Tous les secteurs')}>
                  {selectedSector} ×
                </Badge>
              )}
              {selectedCountry !== 'Tous les pays' && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCountry('Tous les pays')}>
                  {selectedCountry} ×
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSector('Tous les secteurs');
                  setSelectedCountry('Tous les pays');
                }}
                className="text-xs h-6"
              >
                Effacer tous
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">
            {filteredOSCs.length} organisation{filteredOSCs.length !== 1 ? 's' : ''} trouvée{filteredOSCs.length !== 1 ? 's' : ''}
          </p>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Pertinence</SelectItem>
              <SelectItem value="name">Nom A-Z</SelectItem>
              <SelectItem value="members">Nombre de membres</SelectItem>
              <SelectItem value="projects">Nombre de projets</SelectItem>
              <SelectItem value="founded">Date de création</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* OSC Grid/List */}
        {filteredOSCs.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredOSCs.map((osc) => (
              <OSCCard key={osc.id} osc={osc} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune OSC trouvée</h3>
            <p className="text-gray-600 mb-4">
              Essayez d'ajuster vos critères de recherche ou de supprimer certains filtres.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedSector('Tous les secteurs');
                setSelectedCountry('Tous les pays');
              }}
            >
              Effacer tous les filtres
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredOSCs.length > 0 && filteredOSCs.length >= 9 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus d'OSC
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}