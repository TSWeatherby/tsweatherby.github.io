module Jekyll
  module MaterialsFilesFilter
    def list_material_files(input)
      site = @context.registers[:site]
      relative_path = (input || '').to_s.sub(%r!^/!, '')
      absolute_path = File.join(site.source, relative_path)

      return [] unless Dir.exist?(absolute_path)

      Dir.children(absolute_path)
        .select { |entry| File.file?(File.join(absolute_path, entry)) }
        .sort
        .map do |entry|
          {
            'path' => File.join('/', relative_path, entry),
            'name' => entry,
          }
        end
    end
  end
end

Liquid::Template.register_filter(Jekyll::MaterialsFilesFilter)
